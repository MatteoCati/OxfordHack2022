import mysql.connector

mydb = mysql.connector.connect(
    host="localhost", user="root", password="password", database="market_data"
)

mycursor = mydb.cursor()


def test_insert_into_oxhack_roles():
    sql = "INSERT INTO oxhack_roles (\
            role, \
            role_id, \
            category, \
            jobs_2019, \
            jobs_2020, \
            jobs_2021, \
            jobs_2022, \
            jobs_2023, \
            jobs_2024, \
            jobs_2025, \
            jobs_2026, \
            jobs_2027, \
            jobs_2028, \
            jobs_2029, \
            jobs_2030, \
            salary \
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = [
        (
            "Translator",
            "12",
            "Other",
            "5960",
            "6120",
            "6217",
            "6100",
            "6330",
            "6780",
            "6650",
            "6860",
            "6900",
            "7404",
            "7609",
            "7890",
            "4500",
        ),
    ]
    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")


def insert_into_oxhack_roles():
    sql = "INSERT INTO oxhack_roles (\
            role, \
            role_id, \
            category, \
            jobs_2019, \
            jobs_2020, \
            jobs_2021, \
            jobs_2022, \
            jobs_2023, \
            jobs_2024, \
            jobs_2025, \
            jobs_2026, \
            jobs_2027, \
            jobs_2028, \
            jobs_2029, \
            jobs_2030, \
            salary \
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = [
        (
            "Data Entry and Information Processing",
            "1",
            "Science and technology",
            "207390",
            "207390",
            "234440",
            "252450",
            "282560",
            "271900",
            "260440",
            "281480",
            "260900",
            "270000",
            "287030",
            "269100",
            "274464",
        ),
        (
            "Web Developer",
            "2",
            "Science and technology",
            "150000",
            "156220",
            "176220",
            "206220",
            "246220",
            "226220",
            "262000",
            "280000",
            "275600",
            "294600",
            "300000",
            "326990",
            "344464",
        ),
        (
            "Truck Driver",
            "3",
            "Other",
            "3223840",
            "3148070",
            "3090490",
            "2929539",
            "2856390",
            "2800000",
            "2750000",
            "2700000",
            "2800000",
            "2667500",
            "2429539",
            "2400000",
            "2200000",
        ),
        (
            "Computer Network Architects",
            "4",
            "Science and technology",
            "152420",
            "159350",
            "168838",
            "188838",
            "198838",
            "208838",
            "228838",
            "238838",
            "248838",
            "258838",
            "268838",
            "2725960",
            "284464",
        ),
        (
            "Computer Systems Administrators",
            "5",
            "Science and technology",
            "354450",
            "339560",
            "346760",
            "356760",
            "336760",
            "326560",
            "316460",
            "306110",
            "326760",
            "296760",
            "306460",
            "315765",
            "304464",
        ),
        (
            "Data Scientists",
            "6",
            "Science and technology",
            "30810",
            "59680",
            "105980",
            "125980",
            "145980",
            "155980",
            "165980",
            "175980",
            "178980",
            "179980",
            "195980",
            "203073",
            "214464",
        ),
        (
            "Athletic Trainers",
            "7",
            "Health and Medicine",
            "28600",
            "27430",
            "26070",
            "25070",
            "24070",
            "23070",
            "24370",
            "25070",
            "26070",
            "24070",
            "25070",
            "23980",
            "24446",
        ),
        (
            "Nursing Assistance",
            "8",
            "Health and Medicine",
            "4683430",
            "4677760",
            "4768620",
            "4765620",
            "4863620",
            "4765620",
            "4869630",
            "4965620",
            "5065620",
            "4965620",
            "5065620",
            "5138274",
            "529464",
        ),
        (
            "Home Health and Personal Care Aides",
            "9",
            "Health and Medicine",
            "3161500",
            "3211590",
            "3266480",
            "3466480",
            "3566480",
            "3366480",
            "3266480",
            "3466480",
            "3366480",
            "3566480",
            "3666480",
            "3577418",
            "3644640",
        ),
        (
            "Market Research Analysts",
            "10",
            "Business, management and administration",
            "678500",
            "690160",
            "747540",
            "727540",
            "717540",
            "727540",
            "723540",
            "729540",
            "727540",
            "727540",
            "727540",
            "728556",
            "714464",
        ),
        (
            "Wind Turbine Technicians",
            "11",
            "Maintenance",
            "5960",
            "5860",
            "6100",
            "5900",
            "5800",
            "5700",
            "5600",
            "5500",
            "5400",
            "5300",
            "5250",
            "5200",
            "5200",
        ),
        (
            "Secretary",
            "12",
            "Administration",
            "5960",
            "5860",
            "6100",
            "5900",
            "5800",
            "5700",
            "5600",
            "5500",
            "5400",
            "5300",
            "5250",
            "5200",
            "5200",
        ),
        (
            "Manager",
            "13",
            "Administration",
            "5960",
            "5860",
            "6100",
            "5900",
            "5800",
            "5700",
            "5600",
            "5500",
            "5400",
            "5300",
            "5250",
            "5200",
            "5200",
        ),
    ]
    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")


def insert_into_oxhack_role_skills():
    sql = "INSERT INTO oxhack_role_skills (\
            role, \
            role_id, \
            skill \
        ) VALUES (%s, %s, %s)"
    val = [
        ("Data Entry and Information Processing", "1", "attention to detail"),
        ("Data Entry and Information Processing", "1", "Python"),
        ("Data Entry and Information Processing", "1", "R"),
        ("Data Entry and Information Processing", "1", "Machine Learning"),
        ("Web Developer", "2", "creativity"),
        ("Web Developer", "2", "programming"),
        ("Web Developer", "2", "JavaScript"),
        ("Web Developer", "2", "TypeScript"),
        ("Web Developer", "2", "C#"),
        ("Web Developer", "2", "Python"),
        ("Web Developer", "2", "IT and technical skills"),
        ("Web Developer", "2", "communication skills"),
        ("Truck Driver", "3", "trucking school diploma"),
        ("Truck Driver", "3", "adaptability"),
        ("Computer Network Architects", "4", "design & deployment of global WAN architectures"),
        ("Computer Systems Administrators", "5", "adaptability"),
        ("Computer Systems Administrators", "5", "teamworking"),
        ("Computer Systems Administrators", "5", "IT and technical skills"),
        ("Data Scientists", "6", "analytical"),
        ("Data Scientists", "6", "data analysis"),
        ("Data Scientists", "6", "Python"),
        ("Data Scientists", "6", "R"),
        ("Data Scientists", "6", "Machine Learning"),
        ("Athletic Trainers", "7", "time management"),
        ("Athletic Trainers", "7", "communication skills"),
        ("Athletic Trainers", "7", "gym instructor certificate"),
        ("Nursing Assistance", "8", "Medicine"),
        ("Nursing Assistance", "8", "communication skills"),
        ("Nursing Assistance", "8", "attention to detail"),
        ("Nursing Assistance", "8", "teamworking"),
        ("Nursing Assistance", "8", "empathy"),
        ("Nursing Assistance", "8", "Medicine"),
        ("Home Health and Personal Care Aides", "9", "flexible"),
        ("Home Health and Personal Care Aides", "9", "communication skills"),
        ("Home Health and Personal Care Aides", "9", "adaptability"),
        ("Nursing Assistance", "8", "Medicine"),
        ("Market Research Analysts", "10", "analytical"),
        ("Market Research Analysts", "10", "communication skills"),
        ("Market Research Analysts", "10", "attention to detail"),
        ("Wind Turbine Technicians", "11", "IT and technical skills"),
        ("Wind Turbine Technicians", "11", "attention to detail"),
        ("Wind Turbine Technicians", "11", "analytical"),
        ("Secretary", "12", "Word"),
        ("Secretary", "12", "Excel"),
        ("Manager", "13", "Word"),
        ("Manager", "13", "PowerPoint")
    ]

    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")


def insert_into_oxhack_role_companies():
    sql = "INSERT INTO oxhack_role_companies (\
            role, \
            role_id, \
            company_name, \
            link \
        ) VALUES (%s, %s, %s, %s)"
    val = [
        (
            "Data Entry and Information Processing",
            "1",
            "Google",
            "https://careers.google.com",
        ),
        ("Data Entry and Information Processing", "1", "Amazon", "https://amazon.force.com/BBJobDetails?Agency=1&isApply=1&reqid=a0R4U000009oKsMUAU&cmpid=SARUEU1201H9&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEEqz_Fe1G9UB3wiR1mmLBx9WGqABYWBPhLNZV0CxshnqRBmZbILbRwaAjTFEALw_wcB"),
        ("Web Developer", "2", "Netcraft", "https://www.netcraft.com/jobs/"),
        ("Web Developer", "2", "Microsft", "https://careers.microsoft.com"),
        ("Web developer", "2", "Google", "https://careers.google.com/jobs"),
        ("Web Developer", "2", "Amazon", "https://amazon.force.com/BBJobDetails?Agency=1&isApply=1&reqid=a0R4U000009oKsMUAU&cmpid=SARUEU1201H9&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEEqz_Fe1G9UB3wiR1mmLBx9WGqABYWBPhLNZV0CxshnqRBmZbILbRwaAjTFEALw_wcB"),
        ("Truck Driver", "3", "Coca cola", "https://www.coca-colacompany.com/careers"),
        ("Computer Network Architects", "4", "Meta", "https://www.metacareers.com"),
        (
            "Computer Systems Administrators",
            "5",
            "Amazon",
            "https://www.coca-colacompany.com/careers",
        ),
        ("Data Scientists", "6", "Google", "https://careers.google.com"),
        (
            "Athletic Trainers",
            "7",
            "NBA",
            "https://www.google.com/search?client=safari&rls=en&q=nba+careers&ie=UTF-8&oe=UTF-8",
        ),
        ("Nursing Assistance", "8", "NHS", "https://www.coca-colacompany.com/careers"),
        (
            "Home Health and Personal Care Aides",
            "9",
            "NHS",
            "https://www.coca-colacompany.com/careers",
        ),
        (
            "Market Research Analysts",
            "10",
            "Goldman Sachs",
            "https://www.coca-colacompany.com/careers",
        ),
        (
            "Wind Turbine Technicians",
            "11",
            "NASA",
            "https://www.coca-colacompany.com/careers",
        ),
        (
            "High School Secretary",
            "12",
            "NASA",
            "https://www.coca-colacompany.com/careers",
        ),
        (
            "Office Secretary",
            "12",
            "NASA",
            "https://www.coca-colacompany.com/careers",
        ),
    ]

    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")


def insert_into_oxhack_skills():
    sql = "INSERT INTO oxhack_skills (\
            skill \
        ) VALUES (%s)"
    val = [
        ["teamwork"],
        ["time management"],
        ["communication skills"],
        ["driving licence"],
        ["adaptability"],
        ["attention to detail"],
        ["analytical"],
        ["gym instructor certificate"],
        ["design & deployment of global WAN architectures"],
        ["IT and technical skills"],
        ["data analysis"],
        ["Python"],
        ["R"],
        ["Machine Learning"],
        ["JavaScript"],
        ["TypeScript"],
        ["C#"],
        ["empathy"],
        ["Medicine"],
        ["programming"],
        ["Word"],
        ["Excel"],
        ["PowerPoint"]
    ]

    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")


if __name__ == "__main__":
    # test_insert_into_oxhack_roles()
    insert_into_oxhack_roles()

    insert_into_oxhack_role_skills()

    insert_into_oxhack_role_companies()

    insert_into_oxhack_skills()
