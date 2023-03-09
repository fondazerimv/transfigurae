import pandas as pd

matthiae = pd.read_csv("0201firstviz/matthiae.csv")

for idx, row in matthiae.iterrows():
    filepath = str(row["path"])
    if "." in filepath:
        name = filepath.split("/")[1].split(".")[0]
    else:
        name = ""

    filepath = "0201firstviz/" + filepath

    tag = """
    <li>
        <input type="radio" name="thumb" class="sr-only" id='"""+ name + """'>
        <label for='"""+ name + """' onclick="selector("""+ str(idx) + """)">
            <img src='"""+ filepath + """' alt='"""+ name + """'>
        </label>
    </li>
    """
    print(tag)