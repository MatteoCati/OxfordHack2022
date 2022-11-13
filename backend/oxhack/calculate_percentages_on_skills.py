from query import query_with_fetchall


def calculate_percentages(
    skills=[
        "teamwork",
        "time management",
        "communication skills",
        "driving licence",
        "adaptability",
        "attention to detail",
        "analytical",
        "gym instructor certificate",
        "design & deployment of global WAN architectures",
        "IT and technical skills",
        "data analysis",
    ]
):
    role_skill_data = query_with_fetchall("SELECT role, skill FROM oxhack_role_skills")

    role_skill_matching_data = []

    for role_skill in role_skill_data:
        role_skill["matching"] = role_skill["skill"] in skills
        role_skill_matching_data.append(role_skill)

    all_roles_category = query_with_fetchall("SELECT role, category FROM oxhack_roles")

    def count_percentage_role(role):
        all = 0
        matching = 0

        for role_skill_matching in role_skill_matching_data:
            if role_skill_matching["role"] == role:
                all += 1

                if role_skill_matching["matching"]:
                    matching += 1

        return round(matching / all, 1) * 100

    all_roles_category_percentage = []

    for roles_category in all_roles_category:
        roles_category["percentage"] = count_percentage_role(roles_category["role"])
        all_roles_category_percentage.append(roles_category)

    def count_percentage_category(category):
        all = 0
        matching = 0

        for roles_category_percentage in all_roles_category_percentage:
            if roles_category_percentage["category"] == category:
                all += 100
                matching += roles_category_percentage["percentage"]

        return round(matching / all, 1) * 100

    all_categories = []

    for roles_category in all_roles_category:
        if roles_category["category"] not in all_categories:
            all_categories.append(roles_category["category"])

    ans = {}

    ans["categories"] = []

    for category in all_categories:
        category_json = {}
        category_json["name"] = category
        category_json["percentage"] = int(count_percentage_category(category))

        category_roles = []

        for roles_category_percentage in all_roles_category_percentage:
            if roles_category_percentage["category"] == category:
                json_role = {}
                json_role["name"] = roles_category_percentage["role"]
                json_role["percentage"] = (int)(roles_category_percentage["percentage"])
                category_roles.append(json_role)

        category_json["roles"] = category_roles
        ans["categories"].append(category_json)

    return ans
