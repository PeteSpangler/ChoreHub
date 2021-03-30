from django.db import models

class Chore(models.Model):
    owner = models.CharField(max_length=200, blank=False)
    task = models.CharField(max_length=200, blank=True)
    dueDate = models.DateField()
    seller = models.CharField(max_length=200, blank=False)
    image = models.ImageField(upload_to='choreImages', blank=True)
    dateCompleted = models.DateField(auto_now_add=True)

    def __str__(self):
        return "{} must complete {} by {}".format(self.owner, self.task, self.dueDate)

class Image(models.Model):
    chore = models.ForeignKey(Chore, on_delete=models.CASCADE, related_name="chore_images", blank=False)
    proof = models.ImageField(upload_to='proof', blank=False)
    uploaded_at = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['-uploaded_at']