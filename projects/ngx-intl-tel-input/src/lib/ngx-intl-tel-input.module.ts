import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NativeElementInjectorDirective } from "./directives/native-element-injector.directive";
import { NgxIntlTelInputComponent } from "./ngx-intl-tel-input.component";
import { NgxIntlTelInputService } from "./ngx-intl-tel-input.service";
import { MatMenuModule } from "@angular/material/menu";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
	declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatMenuModule,
		MatAutocompleteModule,
    MatFormFieldModule,
    NgSelectModule
	],
	exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
})
export class NgxIntlTelInputModule {
	static forRoot(): ModuleWithProviders<NgxIntlTelInputModule> {
		return {
			ngModule: NgxIntlTelInputModule,
			providers: [NgxIntlTelInputService],
		};
	}
}
