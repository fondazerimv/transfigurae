import pandas as pd

sourcedata = pd.read_excel("0130sparql/export-federico-zeri-2023-01-16.xlsx")  
manual_add = {"http://hdl.handle.net/20.500.14008/9386"}
byzartdata = pd.DataFrame()

i = 0
for idx, row in sourcedata.iterrows():
    iconclass = str(row["dc.subject.iconclass"])
    if iconclass.startswith("http:"):
        iconclass = iconclass.replace("http://iconclass.org/", "iconclass:")
    if iconclass.startswith("iconclass:73C713") or row["dc.identifier.uri"] in manual_add:

        #Main information: ID, contributor, chronological and spacial extent, description
        byzartdata.at[i, "uri"] = row["dc.identifier.uri"]
        byzartdata.at[i, "description"] = row["dc.description[en]"].replace("<p>", "").replace("</p>", "")
        byzartdata.at[i, "author"] = ""
        byzartdata.at[i, "contributor"] = row["dc.contributor.contributor[en]"]
        byzartdata.at[i, "start_date"] = row["dc.date.start"]
        byzartdata.at[i, "end_date"] = row["dc.date.end"]

        byzartdata.at[i, "place"] = (str(row["dc.relation.place"]).split(":::"))[0]
        if "fresco" in row["dc.description[en]"] or "mosaic" in row["dc.description[en]"]:
            byzartdata.at[i, "orginal_location"] = (str(row["dc.relation.place"]).split(":::"))[0]
        byzartdata.at[i, "cultural_provenance"] = ""

        #Support, iconology
        material_list = []
        for el in row["dc.format.medium"].split("||"): 
            el = (el.split(":::"))[1].replace("http://vocab.getty.edu/aat/", "aat:")
            material_list.append(el)
        byzartdata.at[i, "material"] = ", ".join(material_list)

        byzartdata.at[i, "iconclass"] = iconclass
        byzartdata.at[i, "notes"] = ""

        i += 1

byzartdata.to_csv("0130sparql/refine_byzart.csv")

