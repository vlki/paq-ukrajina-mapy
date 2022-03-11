#!/usr/bin/env python3

import collections
import csv
import json
import os
from pprint import pp, pprint

source_data_csv_path = os.path.join(os.path.dirname(__file__), '06_detske_skupiny.csv')
okresy_csv_path = os.path.join(os.path.dirname(__file__), 'CIS0101_CS.csv')
output_data_json_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'children_groups_data.json')

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

    output_data_by_id = {}

    for okresy_list_item in okresy_list:
        if okresy_list_item['KOD_RUIAN']:
            output_data_by_id[int(okresy_list_item['KOD_RUIAN'])] = {
                'id': int(okresy_list_item['KOD_RUIAN']),
                'kapacita': 0,
                'pocet_detskych_skupin': 0
            }

    okres_name_to_ruian_code_map = {}
    for okresy_list_item in okresy_list:
        okres_name_to_ruian_code_map[okresy_list_item['TEXT']] = int(okresy_list_item['KOD_RUIAN']) if okresy_list_item['KOD_RUIAN'] != '' else None

    for source_data_item in source_data:
        okres_name = source_data_item['Okres']
        id = okres_name_to_ruian_code_map[okres_name]

        output_data_by_id[id]['kapacita'] += int(source_data_item['Kapacita'])
        output_data_by_id[id]['pocet_detskych_skupin'] += 1

    output_data = []
    for id, okres_data in output_data_by_id.items():
        output_data.append(okres_data)

    output_data = sorted(output_data, key=lambda item: int(item['id']))

    # Write output

    with open(output_data_json_path, mode='w') as output_data_json_file:
        json.dump(output_data, output_data_json_file, ensure_ascii=False, indent=4)

    print(f'Done! Generated data json at: {os.path.abspath(output_data_json_path)}')
