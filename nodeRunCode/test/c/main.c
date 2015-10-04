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
            BattlefieldData[i/9][i%9] = argv[1][i] - 48;
        }
}

int main(int argc,char *argv[])
{
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

