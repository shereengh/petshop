from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Pet
from .forms import PetForm, PetUForm, SignupForm, SigninForm
from django.contrib.auth import login, authenticate, logout
from django.http import Http404
# Create your views here.

def signup(request):
    form = SignupForm()
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)

            user.set_password(user.password)
            user.save()

            login(request, user)
            return redirect("pet-list")
    context = {
        "form":form,
    }
    return render(request, 'signup.html', context)

def signin(request):
    form = SigninForm()
    if request.method == 'POST':
        form = SigninForm(request.POST)
        if form.is_valid():

            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            auth_user = authenticate(username=username, password=password)
            if auth_user is not None:
                login(request, auth_user)
                return redirect('pet-list')
    context = {
        "form":form
    }
    return render(request, 'signin.html', context)

def signout(request):
    logout(request)
    return redirect("signin")

def pet_list(request):
	pets = Pet.objects.filter(available=True)
	context = {
		"pets": pets,
	}
	return render(request, 'pet_list.html', context)
def pet_detail(request, pet_id):
	pet = Pet.objects.get(id=pet_id)
	context = {
		"pet": pet,
	}
	return render(request, 'pet_detail.html', context)

def pet_create(request):
	#Complete Me
    form = PetForm()
    if not request.user.is_staff:
    	messages.warning(request, "Only admin can perform action!")
    	return redirect('pet-list')
    if request.method == "POST":
        form = PetForm(request.POST, request.FILES)
        if form.is_valid():
            pet = form.save(commit=False)
            pet.available=True
            form.save()
            messages.success(request, "Available pet have been posted!")
            return redirect(pet)
    context = {
        "form":form,
    }
    return render(request, 'create.html', context)

def pet_update(request, pet_id):
    pet_obj = Pet.objects.get(id=pet_id)
    form = PetUForm(instance=pet_obj)
    if not request.user.is_staff:
    	messages.warning(request, "Only admin can perform action!")
    	return redirect('pet-list')    
    if request.method == "POST":
        form = PetUForm(request.POST, request.FILES,instance=pet_obj)
        if form.is_valid():
            form.save()
            messages.success(request, "Pet updated successfully!")
            return redirect(pet_obj)
    context = {
        "form":form,
        "pet": pet_obj,
        
    }
    return render(request, 'update.html', context)
def pet_delete(request, pet_id):
    if not request.user.is_staff:
    	messages.warning(request, "Only admin can perform action!")
    	return redirect('pet-list')
    pet_obj = Pet.objects.get(id=pet_id)
    pet_obj.delete()
    messages.warning(request, "You deleted a pet!")
    return redirect('pet-list')