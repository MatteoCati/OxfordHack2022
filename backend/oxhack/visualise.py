from query import query_with_fetchall

role = "Web Developer"

role_data = query_with_fetchall(
    'SELECT * FROM oxhack_roles WHERE role = "{0}"'.format(role)
)

# print('SELECT * FROM oxhack_roles WHERE role = "{0}"'.format(role))

print(role_data[0])
