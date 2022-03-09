#!/usr/bin/env python3

# This script generates the capacities data json

import collections
import csv
import json
import os
from pprint import pprint

source_data_csv_path = os.path.join(os.path.dirname(__file__), '06_kapacity.csv')
orp_csv_path = os.path.join(os.path.dirname(__file__), 'CIS0065_CS.csv')
output_data_json_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'capacities_data.json')

if __name__ == "__main__":
    # Load ORP list

    orp_list = []

    with open(orp_csv_path, mode='r', encoding='cp1250') as orp_csv_file:
        reader = csv.DictReader(orp_csv_file, delimiter=',')

        for row in reader:
            orp_list.append(row)

    # Load source data

    source_data = []

    with open(source_data_csv_path, mode='r') as source_data_csv_file:
        reader = csv.DictReader(source_data_csv_file, delimiter=',')

        for row in reader:
            source_data.append(row)

    # Transform

    output_data = []

    orp_code_to_ruian_code_map = {}
    for orp_list_item in orp_list:
        orp_code_to_ruian_code_map[orp_list_item['CHODNOTA']] = orp_list_item['KOD_RUIAN']

    for source_data_item in source_data:
        orp_code = source_data_item['KOD_ORP']
        orp_source_data = {k: source_data_item[k] for k in source_data_item.keys() - {'KOD_ORP', 'NAZ_ORP', 'KOD_KRAJ', 'KOD_CZNUTS3', 'NAZ_CZNUTS3'}}

        ruian_code = orp_code_to_ruian_code_map[orp_code]

        orp_output_data = collections.OrderedDict()
        orp_output_data['id'] = int(ruian_code)

        for key in sorted(orp_source_data.keys()):
            if key in ['ms_naplnenost_22', 'zs_naplnenost_22']:
                orp_output_data[key] = float(orp_source_data[key].replace(',', '.'))

            if key in ['ms_deti_spolu', 'ms_deti_spolu', 'pocet_ms', 'pocet_zs', 'volna_mista_ms', 'volna_mista_zs', 'zs_kapacita', 'zs_zaci_spolu', 'ms_kapacita']:
                orp_output_data[key] = int(orp_source_data[key])

        output_data.append(orp_output_data)

    output_data = sorted(output_data, key=lambda item: int(item['id']))

    # # Write output

    with open(output_data_json_path, mode='w') as output_data_json_file:
        json.dump(output_data, output_data_json_file, ensure_ascii=False, indent=4)

    print(f'Done! Generated data json at: {os.path.abspath(output_data_json_path)}')
