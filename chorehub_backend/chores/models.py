from django.db import models
class House(models.Model):
    home = models.CharField(max_length=200, blank=False, default="Home")
    choresCompleted = models.IntegerField(blank=True)

    def __str__(self):
        return "{} has completed {} chores".format(self.home, self.choresCompleted)

class Chore(models.Model):
    task = models.CharField(max_length=200, blank=False)
    owner = models.CharField(max_length=100, blank=False)
    priority = models.IntegerField(blank=False)
    isComplete = models.BooleanField(default=False)

    def __str__(self):
        return "{} must complete {}".format(self.owner, self.task)

class Image(models.Model):
    chore = models.ForeignKey(Chore, on_delete=models.CASCADE, related_name="chore_images", blank=True)
    proof = models.ImageField(upload_to="media/proof", blank=True, default="media/proof/todologo.jpg")
    uploaded_at = models.DateField(auto_now_add=True)

    class Meta:        
        ordering = ['-uploaded_at']