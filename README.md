## ChoreHub: A Chore Management System 😟 📋 🏡 ☺️

<h1 align="center">
  <img src="https://github.com/PeteSpangler/ChoreHub/blob/main/ch_app/assets/logo.png" width="300"/>
</h1>

### 📣 Motivation
Hi, this is my first attempt at a mobile application. The backend utilizes Django Rest-Framework and the front end is React Native. The idea for this came from using GitHub actually, the pull request / code review flow being the inspiration for not only the name, but the base functionality. When complete, a user will be able to sign in, create/join a household, and assign chores/update chores as complete. What will make this unique and set it apart from a simple to do app is the built in accountability feature of updating a chore as complete, which will be accompanied by a photo verifying chore completion. Without that, the assigner of the chore could refuse to accept a chore as complete. There are some additional features I would like to add, but I need a lot more time to implement it all.

### 💻 Tech Stack
- Django / Django Rest Framework
- Python
- JavaScript
- React / React Native
- Expo

## 🏃 Quick start / Requirements
First, get that backend up and running. I used Python 3.7, so that would be best. (I need to update the Django project because there are a few environment secrets that prevent it working elsewhere) Then its the usual python development commands:
```bash
# CD into backend directory and create the virtual environment and install dependencies:
$ cd drf_chorehub
$ python3 -m venv env
$ source env/bin/activate
$ pip install -r requirements.txt
# Oh, and then setup Django by migrating the database and creating a super user before running the server:
$ python manage.py migrate
$ python manage.py createsuperuser
$ python manage.py runserver
```
The app is not finished, but to run it on your machine/phone after you fork/download the repo, you need to download Expo. This is done like so:
```bash
# Install the CLI so you can run it locally (same command on powershell)
$ npm install --globall expo-cli
# Once that is all done, cd into ch_app and run:
$ expo install
# And after the packages have been installed:
$ expo start
```
So now you have it running locally, but how do you know it works? You have a few options here:

[Download Android Studio](https://developer.android.com/studio) and use it to run an Android simulator.
If you have a Mac, I am pretty sure you can run it on a simulator through Xcode. (Probably?)
Or you can download the Expo Go App for [iOS](https://itunes.com/apps/exponent) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) and run it on your own device!

## 📱 In Action
Home Screen before Login:
<p align="center">
  <img src = "https://github.com/PeteSpangler/ChoreHub/blob/main/screenshots/noLogin.PNG" width=300 height=600>
  </p>
Home Screen after Login:
 <p align="center">
  <img src = "https://github.com/PeteSpangler/ChoreHub/blob/main/screenshots/LoggedIn.PNG" width=300 height=600>
  </p>
Add Chore Screen:
<p align="center">
  <img src = "https://github.com/PeteSpangler/ChoreHub/blob/main/screenshots/addChore.PNG" width=300 height=600>
  </p>
Chore List screen:
<p align="center">
  <img src="https://github.com/PeteSpangler/ChoreHub/blob/main/screenshots/ChoreList.PNG" width=300 height=600>
  </p>
  
 [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
