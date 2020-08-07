import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NativeElementInjectorDirective } from "./directives/native-element-injector.directive";
import { NgxIntlTelInputComponent } from "./ngx-intl-tel-input.component";
import { NgxIntlTelInputService } from "./ngx-intl-tel-input.service";
import { MatMenuModule } from "@angular/material/menu";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
	declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatMenuModule,
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
