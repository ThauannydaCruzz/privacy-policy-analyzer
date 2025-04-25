import requests

BASE_URL = "http://localhost:5000"

# Teste criação de política
def test_create_policy():
    response = requests.post(f"{BASE_URL}/policies", json={
        "title": "Example Policy",
        "content": "This is an example privacy policy."
    })
    print("Create Policy:", response.json())

# Teste listagem de políticas
def test_list_policies():
    response = requests.get(f"{BASE_URL}/policies")
    print("List Policies:", response.json())

# Teste visualização de política
def test_get_policy(policy_id):
    response = requests.get(f"{BASE_URL}/policies/{policy_id}")
    print("Get Policy:", response.json())

# Teste análise de política
def test_analyze_policy(policy_id):
    response = requests.post(f"{BASE_URL}/policies/{policy_id}/analyze")
    print("Analyze Policy:", response.json())


if __name__ == "__main__":
    test_create_policy()
    test_list_policies()
    test_get_policy(1)  # 
    test_analyze_policy(1)  