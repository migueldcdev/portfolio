export interface Project {
    id: number,
    title: string, 
    description: string,
    source: string,
    stack: string,
    frontPage : string,
    captureOne: string,
    captureTwo: string,
    type: string
  }

export const projects = [
    {
        "id": 1,
        "title" : "Start IoT 5.0 Landing Page", 
        "description" : "This web page was selected between other five to represent Start IoT 5.0 project, a disruptive project wich I was part of.",
        "source": "https://obradoirolugo.com",
        "stack": "Javascript, HTML, CSS and Bootstrap",
        "frontPage" : "https://raw.githubusercontent.com/migueldcdev/portfolio-images/main/iot.png?token=GHSAT0AAAAAABZ7R25DXJIIWHRKTPP5GX6KY2LCMTQ",
        "captureOne": "https://raw.githubusercontent.com/migueldcdev/portfolio-images/main/iota.png",
        "captureTwo": "https://raw.githubusercontent.com/migueldcdev/portfolio-images/main/iotb.png",
        "type": "Web"
    },
    {
        "id": 2,
        "title" : "ChartApp", 
        "description" : "A minimalist application that allows you to create custom graphs by loading a Csv, Excel or LibreOffice Calc file.",
        "source": "https://github.com/migueldcdev/chartApp",
        "stack": "Python",
        "frontPage" : "https://raw.githubusercontent.com/migueldcdev/portfolio-images/main/chartappcov.png",
        "captureOne": "https://raw.githubusercontent.com/migueldcdev/portfolio-images/main/chartapp1.png",
        "captureTwo": "https://raw.githubusercontent.com/migueldcdev/portfolio-images/main/chartapp2.png",
        "type": "Desktop"
    }

]
