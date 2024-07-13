import os
import json
import yaml
import re
import datetime

def DateEncoder(obj):
  if isinstance(obj, (datetime.datetime, datetime.date)):
      return obj.strftime('%Y-%m-%d')

def parse_front_matter(file_content):
    front_matter_regex = r'^---\n(.*?)\n---\n'
    match = re.search(front_matter_regex, file_content, re.DOTALL)
    if match:
        front_matter = match.group(1)
        data = yaml.safe_load(front_matter)
        return data
    return None

def get_markdown_files(directory):
    markdown_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md') or file.endswith('.markdown'):
                markdown_files.append(os.path.join(root, file))
    return markdown_files

def read_files_and_parse(directory):
    parsed_data = []
    for file_path in get_markdown_files(directory):
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            front_matter = parse_front_matter(content)
            if front_matter:
                front_matter['id'] = os.path.basename(file_path).replace('.md', '')
                front_matter['path'] = file_path
                parsed_data.append(front_matter)
    return parsed_data

def sort_by_date(parsed_data):
    return sorted(parsed_data, key=lambda x: x['date'], reverse=True)

def save_to_json(data, output_file):
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=2, default=DateEncoder)

def main(directory, output_file):
    parsed_data = read_files_and_parse(directory)
    sorted_data = sort_by_date(parsed_data)
    save_to_json(sorted_data, output_file)

if __name__ == '__main__':
    directory = 'public/docs'
    output_file = 'src/components/articles/data.json'
    main(directory, output_file)
