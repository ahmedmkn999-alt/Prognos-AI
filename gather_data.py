import requests

def update_prognos_brain():
    # رابط كنز البرمجة اللي أنت لقيته
    url = "https://raw.githubusercontent.com/sindresorhus/awesome/main/readme.md"
    
    print("Prognos AI is connecting to the global brain...")
    response = requests.get(url)
    
    if response.status_code == 200:
        with open("world_knowledge.txt", "w", encoding="utf-8") as f:
            f.write(response.text)
        print("Success! World knowledge has been ingested.")
    else:
        print("Failed to connect.")

if __name__ == "__main__":
    update_prognos_brain()
