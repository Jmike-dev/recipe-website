import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
// import { SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-app-dialog',
    standalone: true,
    templateUrl: './app-dialog.component.html',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: {
            recipeID: number;
            recipeTitle: string;
            recipeInstructions: string;
        }
    ) {}
    Instructions: string = this.data.recipeInstructions;

    // abstract bypassSecurityTrustHtml(instructions: string):SafeHtml
}
