import sys
import re

def extract_version_from_title(title):
    match = re.search(r'(?<=Version: v)\d+\.\d+\.\d+', title)
    if match:
        return match.group()
    else:
        return None

if __name__ == "__main__":
    title = sys.argv[1]
    version_tag = extract_version_from_title(title)
    if version_tag:
        print(version_tag)