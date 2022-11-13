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
            "194440",
            "192450",
            "192560",
            "191900",
            "190440",
            "191480",
            "190900",
            "190000",
            "187030",
            "189100",
            "274464",
        ),
        (
            "Web Developer",
            "2",
            "Science and technology",
            "1500",
            "156220",
            "84820",
            "84820",
            "88820",
            "900000",
            "102000",
            "97000",
            "100000",
            "102000",
            "101000",
            "101699",
            "274464",
        ),
        (
            "Truck Driver",
            "3",
            "Other",
            "3223840",
            "3148070",
            "3390490",
            "3729539",
            "3729539",
            "3729539",
            "3729539",
            "3729539",
            "3729539",
            "3729539",
            "3729539",
            "3729539",
            "274464",
        ),
        (
            "Computer Network Architects",
            "4",
            "Science and technology",
            "152420",
            "159350",
            "168838",
            "168838",
            "168838",
            "168838",
            "168838",
            "168838",
            "168838",
            "168838",
            "168838",
            "20259600",
            "274464",
        ),
        (
            "Computer Systems Administrators",
            "5",
            "Science and technology",
            "354450",
            "339560",
            "316760",
            "316760",
            "316760",
            "316760",
            "316760",
            "316760",
            "316760",
            "316760",
            "316760",
            "335765",
            "274464",
        ),
        (
            "Data Scientists",
            "6",
            "Science and technology",
            "30810",
            "59680",
            "105980",
            "105980",
            "105980",
            "105980",
            "105980",
            "105980",
            "105980",
            "105980",
            "105980",
            "143073",
            "274464",
        ),
        (
            "Athletic Trainers",
            "7",
            "Health and Medicine",
            "28600",
            "27430",
            "26070",
            "26070",
            "26070",
            "26070",
            "26070",
            "26070",
            "26070",
            "26070",
            "26070",
            "29980",
            "274464",
        ),
        (
            "Nursing Assistance",
            "8",
            "Health and Medicine",
            "4683430",
            "4677760",
            "4765620",
            "4765620",
            "4765620",
            "4765620",
            "4765620",
            "4765620",
            "4765620",
            "4765620",
            "4765620",
            "6338274",
            "274464",
        ),
        (
            "Home Health and Personal Care Aides",
            "9",
            "Health and Medicine",
            "3161500",
            "3211590",
            "3366480",
            "3366480",
            "3366480",
            "3366480",
            "3366480",
            "3366480",
            "3366480",
            "3366480",
            "3366480",
            "4477418",
            "274464",
        ),
        (
            "Market Research Analysts",
            "10",
            "Business, management and administration",
            "678500",
            "690160",
            "727540",
            "727540",
            "727540",
            "727540",
            "727540",
            "727540",
            "727540",
            "727540",
            "727540",
            "1018556",
            "274464",
        ),
        (
            "Wind Turbine Technicians",
            "11",
            "Maintenance",
            "5960",
            "5860",
            "10100",
            "10100",
            "10100",
            "10100",
            "10100",
            "10100",
            "10100",
            "10100",
            "10100",
            "12120",
            "274464",
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
        ("Web Developer", "2", "creativity"),
        ("Web Developer", "2", "programming"),
        ("Truck Driver", "3", "trucking school diploma"),
        ("Truck Driver", "3", "adaptability"),
        ("Computer Network Architects", "4", "design & deployment of global WAN"),
        ("Computer Systems Administrators", "5", "adaptability"),
        ("Computer Systems Administrators", "5", "teamworking"),
        ("Computer Systems Administrators", "5", "IT and technical skills"),
        ("Data Scientists", "6", "analytical"),
        ("Data Scientists", "6", "data analysis"),
        ("Athletic Trainers", "7", "time management"),
        ("Athletic Trainers", "7", "communication skills"),
        ("Athletic Trainers", "7", "gym instructor certificate"),
        ("Nursing Assistance", "8", "communication skills"),
        ("Nursing Assistance", "8", "attention to detail"),
        ("Home Health and Personal Care Aides", "9", "flexible"),
        ("Home Health and Personal Care Aides", "9", "communication skills"),
        ("Home Health and Personal Care Aides", "9", "adaptability"),
        ("Market Research Analysts", "10", "analytical"),
        ("Market Research Analysts", "10", "communication skills"),
        ("Market Research Analysts", "10", "attention to detail"),
        ("Wind Turbine Technicians", "11", "IT and technical skills"),
        ("Wind Turbine Technicians", "11", "attention to detail"),
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
        ("Web Developer", "2", "Netcraft", "https://www.netcraft.com/jobs/"),
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
