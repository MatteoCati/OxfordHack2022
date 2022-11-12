import mysql.connector

mydb = mysql.connector.connect(
    host="localhost", user="root", password="password", database="market_data"
)

mycursor = mydb.cursor()


def insert_into_oxhack_roles():
    sql = "INSERT INTO oxhack_roles (\
            role, \
            role_id, \
            q1_2021_nr_jobs, \
            q2_2021_nr_jobs, \
            q3_2021_nr_jobs, \
            q4_2021_nr_jobs, \
            q1_2022_nr_jobs, \
            q2_2022_nr_jobs, \
            q3_2022_nr_jobs, \
            q4_2022_nr_jobs, \
            nr_jobs \
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = [("", "", "", "", "", "", "", "", "", "", "")]

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
