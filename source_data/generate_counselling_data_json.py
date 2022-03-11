#!/usr/bin/env python3

import collections
import csv
import json
import os
from pprint import pprint

source_data_csv_path = os.path.join(os.path.dirname(__file__), '06_poradny.csv')
kraje_csv_path = os.path.join(os.path.dirname(__file__), 'CIS0100_CS.csv')
output_data_json_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'counselling_data.json')

if __name__ == "__main__":
    # Load ORP list

    kraje_list = []

    with open(kraje_csv_path, mode='r', encoding='cp1250') as f:
        reader = csv.DictReader(f, delimiter=',')

        for row in reader:
            kraje_list.append(row)

    # Load source data

    source_data = []

    with open(source_data_csv_path, mode='r') as source_data_csv_file:
        reader = csv.DictReader(source_data_csv_file, delimiter=',')

        for row in reader:
            source_data.append(row)

    # Transform

    output_data = []

    kraj_nuts_to_ruian_map = {}
    for kraje_list_item in kraje_list:
        kraj_nuts_to_ruian_map[kraje_list_item['CZNUTS']] = kraje_list_item['KOD_RUIAN']

    for source_data_item in source_data:
        kraj_nuts = source_data_item['kraj']
        kraj_ruian = kraj_nuts_to_ruian_map[kraj_nuts]

        kraj_output_data = collections.OrderedDict()
        kraj_output_data['id'] = int(kraj_ruian)

        for key in sorted(source_data_item.keys()):
            if key in ['pedagogu', 'zlomek']:
                kraj_output_data[key] = float(source_data_item[key].replace(',', '.'))

            if key in ['pripadu']:
                kraj_output_data[key] = int(source_data_item[key])

        output_data.append(kraj_output_data)

    output_data = sorted(output_data, key=lambda item: int(item['id']))

    # # Write output

    with open(output_data_json_path, mode='w') as output_data_json_file:
        json.dump(output_data, output_data_json_file, ensure_ascii=False, indent=4)

    print(f'Done! Generated data json at: {os.path.abspath(output_data_json_path)}')
