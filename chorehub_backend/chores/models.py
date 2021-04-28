from django.db import models
from django.contrib.auth.models import User

class House(models.Model):
    house = models.CharField(max_length=200, blank=False, default="Home")
    choresCompleted = models.IntegerField(null=False, default=1)
    member = models.ForeignKey(User, on_delete = models.CASCADE, blank=False)
    
    def __str__(self):
        return "{} has completed {} chores!".format(self.house, self.choresCompleted)

    class Meta:
        ordering = ['-id']

class Chore(models.Model):
    task = models.CharField(max_length=180)
    owner = models.ForeignKey(User, on_delete = models.CASCADE, blank=False)
    priority = models.IntegerField(null=False, default=1)
    isComplete = models.BooleanField(default=False)


    def __str__(self):
        return "We need {} to {}".format(self.owner, self.task)

    class Meta:
        ordering = ['-priority']

class Image(models.Model):
    chore = models.ForeignKey(Chore, on_delete=models.CASCADE, related_name="chore_images", blank=False)
    proof = models.ImageField(upload_to="proof", blank=True)
    uploaded_at = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['-uploaded_at']