import mysql.connector

mydb = mysql.connector.connect(
    host="localhost", user="root", password="password", database="market_data"
)

mycursor = mydb.cursor()


def delete_from_oxhack_roles():
    sql = "DELETE FROM oxhack_roles"
    mycursor.execute(sql)
    mydb.commit()
    print("deleted from oxhack_roles")


def delete_from_oxhack_role_skills():
    sql = "DELETE FROM oxhack_role_skills"

    mycursor.execute(sql)
    mydb.commit()
    print("deleted from oxhack_role_skills")


def delete_from_oxhack_role_companies():
    sql = "DELETE FROM oxhack_role_companies"

    mycursor.execute(sql)
    mydb.commit()
    print("deleted from oxhack_role_companies")


def delete_from_oxhack_skills():
    sql = "DELETE FROM oxhack_skills"

    mycursor.execute(sql)
    mydb.commit()
    print("deleted from oxhack_skills")


if __name__ == "__main__":
    delete_from_oxhack_roles()

    delete_from_oxhack_role_skills()

    delete_from_oxhack_role_companies()

    delete_from_oxhack_skills()
