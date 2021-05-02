from django.db import models

class Chore(models.Model):
    owner = models.CharField(max_length=180)
    task = models.CharField(max_length=180)
    priority = models.IntegerField(null=False, default=1)
    ch_image = models.ImageField(upload_to="choreImages", blank=True, default="choreImages/defaultpic.png")
    isComplete = models.BooleanField(default=False)

    def __str__(self):
        return self.task

    class Meta:
        ordering = ['-priority']

class Image(models.Model):
    chore = models.ForeignKey(Chore, on_delete=models.CASCADE, related_name="chore_images", blank=False)
    proof = models.ImageField(upload_to="proof", blank=True)
    uploaded_at = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['-uploaded_at']