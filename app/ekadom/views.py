from django.shortcuts import render


def main_page(request):
    name = 'ivan'

    context = {
        'name': name
    }

    return render(request=request, template_name='ekadom/main.html', context=context)


def ads_page(request):
    return render(request=request, template_name='ekadom/ads.html')


def about_page(request):
    return render(request=request, template_name='ekadom/about.html')


def contacts_page(request):
    return render(request=request, template_name='ekadom/contacts.html')
