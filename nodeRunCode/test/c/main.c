#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void DataProcessing(char *argv[],int BattlefieldData[9][9]){
    int i;
    if(strlen(argv[1])!=81){
        BattlefieldData[0][0]=-100;
    }
    else
        for(i=0;i<81;i++){
            switch(argv[1][i]){
                case 48:BattlefieldData[i/9][i%9] = 0;break;
                case 49:BattlefieldData[i/9][i%9] = 1;break;
                case 50:BattlefieldData[i/9][i%9] = 2;break;
                case 51:BattlefieldData[i/9][i%9] = 3;break;
                case 52:BattlefieldData[i/9][i%9] = 4;break;
                case 53:BattlefieldData[i/9][i%9] = 5;break;
                case 54:BattlefieldData[i/9][i%9] = 6;break;
                case 55:BattlefieldData[i/9][i%9] = 7;break;
                case 56:BattlefieldData[i/9][i%9] = 8;break;
                case 57:BattlefieldData[i/9][i%9] = 9;break;
            }

        }
}

int main(int argc,char *argv[])
{
    printf("%d\n", strlen(argv[1]));
    int BattlefieldData[9][9];
    int i;
    DataProcessing(argv,BattlefieldData);
    if(BattlefieldData[0][0]==-100){
        printf("Size Error!\n");
    }
    else
        for(i=0;i<81;i++){
            if(i%9==0&&i!=0)
                printf("\n");
            printf("%d",BattlefieldData[i/9][i%9]);
        }
    return 0;
}

