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
    val = [("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")]

    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")


def insert_into_oxhack_role_skills():
    sql = "INSERT INTO oxhack_role_skills (\
            role, \
            role_id, \
            skill \
        ) VALUES (%s, %s, %s)"
    val = [("", "", "")]

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
    val = [("", "", "", "")]

    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")


def insert_into_oxhack_skills():
    sql = "INSERT INTO oxhack_skills (\
            skill \
        ) VALUES (%s)"
    val = [("")]

    mycursor.executemany(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "was inserted.")


if __name__ == "__main__":
    insert_into_oxhack_roles()

    insert_into_oxhack_role_skills()

    insert_into_oxhack_role_companies()

    insert_into_oxhack_skills()
