import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from "@angular/forms";
@NgModule({
    imports: [MatToolbarModule, 
        MatCardModule, 
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        CdkStepperModule,
        FormsModule
    ]
})

export class MaterialModule {}

