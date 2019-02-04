#!/bin/bash

read choice

if [ $choice == "compile" ]; then
    sass resources/assets/sass/style.sass public/css/style.css
elif [ $choice == "watch" ]; then
    sass resources/assets/sass/style.sass public/css/style.css --watch
elif [ $choice == "compress" ]; then
    sass resources/assets/sass/style.sass public/css/style.css --style=compressed

else
    echo "NGENTOT!!!"
fi
