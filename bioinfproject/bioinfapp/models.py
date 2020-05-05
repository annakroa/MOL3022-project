from django.db import models


class TestModelCorona(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=100)
    sequence = models.CharField(max_length=100)
    discovered = models.DateField()
    country = models.CharField(max_length=100)


    def __str__(self):
        return self.name + " " + self.country


# think this is just for logg-in and to create fields in the database for this

# adds date automatically: (auto_now_add=True)
