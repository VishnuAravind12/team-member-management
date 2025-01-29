from django.db import models

class TeamMember(models.Model):
    ROLES = [
        ('admin', 'Admin'),
        ('regular', "Regular"),
    ]

    first_name = models.CharField(max_length = 40)
    last_name = models.CharField(max_length = 40)
    phone_number = models.CharField(max_length = 20)
    email = models.EmailField(unique = True)
    role = models.CharField(max_length = 10, choices = ROLES, default = 'regular')

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.role})"