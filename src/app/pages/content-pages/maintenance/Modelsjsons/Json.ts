export const Classjson = {
    "checkErrorsMode": "onValueChanged",
    "title":"مشتری",
    "showQuestionNumbers": "off",
    "pages": [
        {
            "name": "page1",     
            "elements": [
                {
                    "type": "matrixdynamic",
                    "name": "fields",
                    "title": " فیلدهای اطلاعاتی مربوط به مشتری  ",

                    "columns": [
                        {
                            "name": "fieldName",
                            "title": "عنوان فیلد",
                            "cellType": "text",
                            "isRequired": true
                        },
                        {
                            "name": "fieldType",
                            "title": "نوع فیلد",
                            "logoPosition": "left",
                            "right-to-left" : true,
                            "cellType": "dropdown",
                            "isRequired": true,
                            "choices": [
                                "Text",
                                "Number",
                                "Boolean",
                                "Datetime",
                                "Float"
                            ]
                        },
                        {
                            
                            "name": "isRequired",
                            "title": "اجباری",
                            "cellType": "radiogroup",
                            "isRequired": true,
                            "choices": [
                                "بله",
                                "خیر"
                            ],
                        },
                        {
                            "name": "Description",
                            "title": "توضیحات",
                            "cellType": "comment",
                            "isRequired": false
                        }
                    ],
                    "detailElements": [
                        {
                            "type": "radiogroup",
                            "name": "isRelation",
                            "startWithNewLine": false,
                            "title": "آیا ارتباط با مدل دیگری دارد؟",
                            "isRequired": true,
                            "choices": [
                                "بله",
                                "خیر"
                            ],
                            "colCount": 0
                        },
                        {
                            "type": "dropdown",
                            "name": "RelationModel",
                            "visibleIf": "{row.isRelation} = 'بله'",
                            "startWithNewLine": false,
                            "title": "مدل",
                            "isRequired": true,
                            "choicesByUrl": {
                                "url": "https://panel.rabit.ir/s/getValues.do?code=state"
                               }
                        },
                        
                    ],
                    "detailPanelMode": "underRow",
                    "rowCount": 1,
                    "addRowText": "اضافه کردن فیلد جدید",
                    "removeRowText": "حذف کردن فیلد"
                },
                {
                    "type": "matrixdynamic",
                    "name": "fields",
                    "title": " فیلدهای اطلاعاتی مربوط به مشتری  ",

                    "columns": [
                        {
                            "name": "fieldName",
                            "title": "عنوان فیلد",
                            "cellType": "text",
                            "isRequired": true
                        },
                        {
                            "name": "fieldType",
                            "title": "نوع فیلد",
                            "logoPosition": "left",
                            "right-to-left" : true,
                            "cellType": "dropdown",
                            "isRequired": true,
                            "choices": [
                                "Text",
                                "Number",
                                "Boolean",
                                "Datetime",
                                "Float"
                            ]
                        },
                        {
                            
                            "name": "isRequired",
                            "title": "اجباری",
                            "cellType": "radiogroup",
                            "isRequired": true,
                            "choices": [
                                "بله",
                                "خیر"
                            ],
                        },
                        {
                            "name": "Description",
                            "title": "توضیحات",
                            "cellType": "text",
                            "isRequired": false
                        }
                    ],
                    "detailElements": [
                        {
                            "type": "radiogroup",
                            "name": "isalive",
                            "startWithNewLine": false,
                            "title": "Alive?",
                            "isRequired": true,
                            "choices": [
                                "Yes",
                                "No"
                            ],
                            "colCount": 0
                        },
                        {
                            "type": "dropdown",
                            "name": "liveage",
                            "visibleIf": "{row.isalive} = 'Yes'",
                            "startWithNewLine": false,
                            "title": "Age",
                            "isRequired": true,
                            "choicesMin": 1,
                            "choicesMax": 115
                        },
                        {
                            "type": "dropdown",
                            "name": "deceasedage",
                            "visibleIf": "{row.isalive} = 'No'",
                            "startWithNewLine": false,
                            "title": "Deceased Age",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": -1,
                                    "text": "Unknown"
                                }
                            ],
                            "choicesMin": 1,
                            "choicesMax": 115
                        },
                        {
                            "type": "radiogroup",
                            "name": "causeofdeathknown",
                            "visibleIf": "{row.isalive} = 'No'",
                            "startWithNewLine": false,
                            "title": "Cause of Death Known?",
                            "isRequired": true,
                            "choices": [
                                "Yes",
                                "No"
                            ],
                            "colCount": 0
                        },
                        {
                            "type": "text",
                            "name": "causeofdeath",
                            "visibleIf": "{row.isalive} = 'No' and {row.causeofdeathknown} = 'Yes'",
                            "startWithNewLine": false,
                            "title": "Cause of Death",
                            "isRequired": true
                        }
                    ],
                    "detailPanelMode": "underRow",
                    "rowCount": 1,
                    "addRowText": "اضافه کردن فیلد جدید",
                    "removeRowText": "حذف کردن فیلد"
                }

            ]
        }
    ]
};
export const json = {
    "elements": [
      {
        "type": "radiogroup",
        "name": "one",
        "title": "Radiogroup question (green)",
        "choices": [ "Yes", "No" ]
      },
      {
        "type": "checkbox",
        "name": "two",
        "title": "Checkbox question (orange)",
        "choices": [ "One", "Two" ]
      },
      {
        "type": "radiogroup",
        "name": "three",
        "title": "Required question (red title)",
        "isRequired": true,
        "choices": [ "Yes", "No" ]
      }
    ]
  };