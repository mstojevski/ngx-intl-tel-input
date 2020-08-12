import { CountryISO } from 'projects/ngx-intl-tel-input/src/lib/enums/country-iso.enum';
import {
	SearchCountryField
} from 'projects/ngx-intl-tel-input/src/lib/enums/search-country-field.enum';
import { TooltipLabel } from 'projects/ngx-intl-tel-input/src/lib/enums/tooltip-label.enum';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  selectedCountry: CountryISO;
	preferredCountries: CountryISO[] = [
		CountryISO.UnitedStates,
		CountryISO.UnitedKingdom,
	];
	phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
    country: new FormControl(undefined, [Validators.required]),
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
  ngOnInit() {
    fetch("https://ipinfo.io/87.116.161.226/json?token=669db8df3377aa")
   .then((data) => data.json())
   .then((data) => this.selectedCountry = data.country);
  }
}
