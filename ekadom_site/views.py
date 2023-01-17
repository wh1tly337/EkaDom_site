from django.shortcuts import render


def start_page(request):
    return render(request=request, template_name='ekadom/index.html')
