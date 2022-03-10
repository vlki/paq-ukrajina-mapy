#!/usr/bin/env python3

# This script generates the accommodation data json

import collections
import csv
import json
import os
from pprint import pp, pprint

source_data_csv_path = os.path.join(os.path.dirname(__file__), '03_total.csv')
okresy_csv_path = os.path.join(os.path.dirname(__file__), 'CIS0101_CS.csv')
output_data_json_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'accommodation_data.json')

if __name__ == "__main__":
    # Load ORP list

    okresy_list = []

    with open(okresy_csv_path, mode='r', encoding='cp1250') as okresy_csv_file:
        reader = csv.DictReader(okresy_csv_file, delimiter=',')

        for row in reader:
            okresy_list.append(row)

    # Load source data

    source_data = []

    with open(source_data_csv_path, mode='r') as source_data_csv_file:
        reader = csv.DictReader(source_data_csv_file, delimiter=',')

        for row in reader:
            source_data.append(row)

    # Transform

    output_data = []

    okres_code_to_ruian_code_map = {}
    for okresy_list_item in okresy_list:
        okres_code_to_ruian_code_map[okresy_list_item['CHODNOTA']] = int(okresy_list_item['KOD_RUIAN']) if okresy_list_item['KOD_RUIAN'] != '' else None

    for source_data_item in source_data:
        okres_code = source_data_item['KOD_OKRES']
        okres_source_data = {k: source_data_item[k] for k in source_data_item.keys() - {'KOD_OKRES'}}

        ruian_code = okres_code_to_ruian_code_map[okres_code]

        okres_output_data = collections.OrderedDict()
        okres_output_data['id'] = ruian_code
        okres_output_data['flats_sreality'] = int(okres_source_data['Nabídka bytů k pronájmu (SReality, začátek března 2023)'])
        okres_output_data['flats_municipal'] = int(okres_source_data['Dostupné obecné byty (odhad 4 % celkového fondu)'])
        okres_output_data['hotel_beds'] = int(okres_source_data['Odhad počtu volných lůžek v hotelích apod. zařízeních (realitická varianta - květen)'])
        okres_output_data['total_beds'] = int(okres_source_data['Celková kapacita lůžek (předpoklad 4 lidí na byt)'])

        output_data.append(okres_output_data)

    output_data = sorted(output_data, key=lambda item: int(item['id']))

    # Write output

    with open(output_data_json_path, mode='w') as output_data_json_file:
        json.dump(output_data, output_data_json_file, ensure_ascii=False, indent=4)

    print(f'Done! Generated data json at: {os.path.abspath(output_data_json_path)}')
