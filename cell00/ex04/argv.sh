#!/bin/bash

# Check if the number of arguments ($#) is zero
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop through all arguments provided
    for arg in "$@"
    do
        echo "$arg"
    done
fi	
