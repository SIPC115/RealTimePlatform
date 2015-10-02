#include<stdio.h>

int main(int argc, char *argv[]){
    // char demo[100];
    int length = argc;
    int i;
    for(i = 1; i < length; i++){
        printf("%s ", argv[i]);
        // a[i-1] = argv[i]
    }
    // scanf("%s", &demo);
    // printf("%s\n", demo);
}