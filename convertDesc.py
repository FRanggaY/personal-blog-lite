import re


raw_data = '''
'''

# Split the string by '<' and '>', then format each part
formatted_parts = []
for part in raw_data.split('<'):
    if part.startswith('strong') or part.startswith('span'):
        formatted_parts.append('<' + part)
    else:
        formatted_parts.extend(part.split('>'))
        formatted_parts[-1] += '>'  # Add back the '>' character

# Join the parts to form the formatted string
formatted_data = ''.join(formatted_parts)

# Add backslashes after '=', and ';'
formatted_data = formatted_data.replace('=', '=\\').replace(';', ';\\')

formatted_data = ''.join(raw_data.split('\n')).replace('=', '=\\').replace(';', ';\\').replace('"', '\\"')

formatted_data = re.sub(r'\\\\', r'\\', formatted_data)

# Define a regular expression pattern to match URLs
url_pattern = r'https?://[^\s\\"]+'

# Find all URLs in the string
urls = re.findall(url_pattern, formatted_data)

# Remove backslashes from the URLs
for url in urls:
  formatted_url = url.replace('\\', '')
  formatted_data = formatted_data.replace(url, formatted_url)

# Define a regular expression pattern to match backslashes not following '=' or '"'
pattern = r'\\(?!["=])'

# Replace backslashes using the pattern
formatted_data = re.sub(pattern, '', formatted_data)
print(formatted_data)

# nbsp issue
# if text already contain / got remove / (not good for article that has prompt)
