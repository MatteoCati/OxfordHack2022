import mysql.connector

mydb = mysql.connector.connect(
    host="localhost", user="root", password="password", database="market_data"
)

mycursor = mydb.cursor()


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
        ("Data Entry and Information Processing", "1", "Science and technology","207390, "207390","194440", "", "", "", "", "", "", "", "", "189100", ""),
        ("Web Developer", "2", "Science and technology", "1500", "156220", "84820","", "", "", "", "", "", "", "", "101699", ""),
        ("Truck Driver", "3", "Other", "3223840", "3148070", "3390490", "", "", "", "", "", "", "", "", "3729539", ""),
        ("Computer Network Architects", "4", "Science and technology", "152420", "159350", "168838", "", "", "", "", "", "", "", "", "20259600", ""),
        ("Computer Systems Administrators", "5", "Science and technology", "354450", "339560", "316760", "", "", "", "", "", "", "", "", "335765", ""),
        ("Data Scientists", "6", "Science and technology", "30810", "59680", "105980", "", "", "", "", "", "", "", "", "143073", ""),
        ("Athletic Trainers", "7", "Health and Medicine", "28600", "27430", "26070", "", "", "", "", "", "", "", "",, "29980", ""),
        ("Nursing Assistance", "8", "Health and Medicine", "4683430", "4677760", "4765620", "", "", "", "", "", "", "", "", "6338274", ""),
        ("Home Health and Personal Care Aides", "9", "Health and Medicine", "3161500", "3211590", "3366480", "", "", "", "", "", "", "", "", "4477418", ""),
        ("Market Research Analysts", "10", "Business, management and administration", "678500", "690160", "727540", "", "", "", "", "", "", "", "", "1018556", ""),
        ("Wind Turbine Technicians", "11", "Maintenance", "5960", "5860", "10100", "", "", "", "", "", "", "", "", "12120", "")]
    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")



def insert_into_oxhack_role_skills():
    sql = "INSERT INTO oxhack_role_skills (\
            role, \
            role_id, \
            skill \
        ) VALUES (%s, %s, %s)"
    val = [ ("Data Entry and Information Processing", "1", "attention to detail"),
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
            ("Athletic Trainers", "7",  "gym instructor certificate"),
            ("Nursing Assistance", "8", "communication skills"),
            ("Nursing Assistance", "8", "attention to detail"),
            ("Home Health and Personal Care Aides", "9", "flexible"),
            ("Home Health and Personal Care Aides", "9", "communication skills"),
            ("Home Health and Personal Care Aides", "9", "adaptability"),
            ("Market Research Analysts", "10", "analytical"), 
            ("Market Research Analysts", "10", "communication skills"), 
            ("Market Research Analysts", "10", "attention to detail"),
            ("Wind Turbine Technicians", "11",  "IT and technical skills"),
            ("Wind Turbine Technicians", "11", "attention to detail")]

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
    val = [("Data Entry and Information Processing", "1", "", ""),
            ("Web Developer", "2", "", ""),
            ("Truck Driver", "3", "", ""),
            ("Computer Network Architects", "4",, "", ""),
            ("Computer Systems Administrators", "5",, "", ""),
            ("Data Scientists", "6", "", ""),
            ("Athletic Trainers", "7", "", ""),
            ("Nursing Assistance", "8", "", ""),
            ("Home Health and Personal Care Aides", "9", "", ""),
            ("Market Research Analysts", "10", "", ""), 
            ("Wind Turbine Technicians", "11", "", "")]

    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")


def insert_into_oxhack_skills():
    sql = "INSERT INTO oxhack_skills (\
            skill \
        ) VALUES (%s)"
    val = [("teamwork", "time management", "communication skills", "driving licence", "adaptability", 
            "attention to detail", "analytical", "gym instructor certificate", 
            "design & deployment of global WAN architectures", "IT and technical skills", "data analysis")]

    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")


if __name__ == "__main__":
    insert_into_oxhack_roles()

    insert_into_oxhack_role_skills()

    insert_into_oxhack_role_companies()

    insert_into_oxhack_skills()
