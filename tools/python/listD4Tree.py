import xml.etree.ElementTree as ET
root = ET.parse('TreeNodes.xml').getroot()


for idx,child in enumerate(root):
    print('{{"id":"{}", "parent" : "obj_2", "text" : "{}","a_attr":{{"href":"larmbook.html?num={}"}}}},'.format(idx+1,child.attrib["Text"],child.attrib["Page"]))

