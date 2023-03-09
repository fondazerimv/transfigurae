import pandas as pd
import json

csv = pd.read_csv("0201firstviz/jsobject_matthiae.csv")
json_str = csv.to_json(orient = 'index', force_ascii=False).replace("\/","/")
json_obj = json.loads(json_str)
print(json_obj)

with open('websitepresentation/js/matthiae_label.json', 'w', encoding='utf-16') as f:
    json.dump(json_obj, f, ensure_ascii=False, indent=4)



# **************************
#Define icon
"""
        if ("aat:300015342" in str(row["material"]) and row["portable"] < 1) or "aat:300177433" in str(row["material"]):
            ico = folium.DivIcon(html=(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 109.3V217.6L183.3 242c-14.5 8.7-23.3 24.3-23.3 41.2V512h96V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96h96V283.2c0-16.9-8.8-32.5-23.3-41.2L416 217.6V109.3c0-8.5-3.4-16.6-9.4-22.6L331.3 11.3c-6.2-6.2-16.4-6.2-22.6 0L233.4 86.6c-6 6-9.4 14.1-9.4 22.6zM24.9 330.3C9.5 338.8 0 354.9 0 372.4V464c0 26.5 21.5 48 48 48h80V273.6L24.9 330.3zM592 512c26.5 0 48-21.5 48-48V372.4c0-17.5-9.5-33.6-24.9-42.1L512 273.6V512h80z"/></svg>'
            )) 
        elif "aat:300033936" in str(row["material"]):
            ico = folium.DivIcon(html=(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C87.5 32 35.1 48.6 9 59.9c-5.6 2.4-9 8-9 14V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V73.9c0-6.1-3.4-11.6-9-14C540.9 48.6 488.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg>'
            ))
        else:
            ico = folium.DivIcon(html=(
            '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="480px" height="480px"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M42.5,23.1v13.1c0,2.3-1.9,4.2-4.2,4.2H9.7"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M5.5,27.4V11.7c0-2.3,1.9-4.2,4.2-4.2h28.5c2.3,0,4.2,1.9,4.2,4.2v4.9"/><circle cx="18.8" cy="16.5" r="3" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M27.1,29.2l2.2-2.6c1-1.1,2.7-1.1,3.7,0L41.8,37"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M26.1,36.2L18,26.6c-1-1.1-2.7-1.1-3.7,0l-8,8.5c-2,2.1-0.5,5.5,2.4,5.5h8.8"/></svg>'
            ))
"""