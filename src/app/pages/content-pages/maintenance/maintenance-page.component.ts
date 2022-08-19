import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";

import { Model, Question, StylesManager, SurveyNG } from "survey-angular";
import { ApiService } from '../../../login/loginbox/api.service';
// import '~bootstrap/dist/css/bootstrap.min.css';
import { Classjson } from "./modelsjsons/json";
// import "~survey-angular/survey.css";
import { options } from '../../../shared/data/dropdowns';
import { typeQuestion } from '../../../shared/data/sweet-alerts';
import { element } from 'protractor';
import { title } from 'process';
import {designModel} from './DesignModel';


@Component({
    selector: 'app-maintenance-page',
    templateUrl: './maintenance-page.component.html',
    styleUrls: ['./maintenance-page.component.scss']
})

export class MaintenancePageComponent implements OnInit {
    @Output() submitSurvey = new EventEmitter<any>();
    @Input()
    result: any;
    public dm:designModel;
    constructor(private api: ApiService,
                
        ) { }
    survey = new Model(Classjson);
    ngOnInit() {
        // this.survey.title = "مدل مشتری";
        // this.survey.pages[0].elementsValue[0].title = "فیلدهای مربوط به " + "مدل مشتری";
        // this.survey.pages[0].elementsValue[1].title = "متدهای مربوط به " + "مدل مشتری";
        // this.survey.data = "{'fields': [{'fieldName': 'ID', 'fieldType': 'Number'}, {'fieldName': 'firstName', 'fieldType': 'Number'}]}"
        // this.survey.showNavigationButtons = false;
        // SurveyNG.render("surveyElement", { model: this.survey });
        SurveyNG.render("surveyElement", { model: this.survey });
        this.api.getalldesignjson().subscribe(
            res => {
                console.log(res);
                if (res.length == 0) {
                    SurveyNG.render("surveyElement", { model: this.survey });
                }
                else {
                    var lastVersion = res.length - 1
                    this.survey.title = res[lastVersion].modelTitle;
                    this.survey.pages[0].elementsValue[0].title = "فیلدهای مربوط به " + res[lastVersion].modelTitle;
                    this.survey.pages[0].elementsValue[1].title = "متدهای مربوط به " + res[lastVersion].modelTitle;
                    this.survey.data = res[lastVersion].fieldJson;
                    this.survey.showNavigationButtons = false;
                    SurveyNG.render("surveyElement", { model: this.survey });
                }
            },
            err => {
                console.log(err)
            });
    }
    save() {
        this.dm.modelName="Technician"
        this.dm.modelTitle="تکنسین"
        this.api.ceratedesignjson(this.dm.modelName,this.dm.modelTitle, this.survey.data).subscribe(
            res => {
                console.log(res)
            },
            err => {
                console.log(err)
            }
        )

    }
}