import { Component } from '@angular/core';

declare var YUI: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardiagram';

  ngOnInit(): void {

        const node = [ {name: 'Start0' , type: 'start' , xy: [10 , 10] },
                    {name: 'State0' , type: 'IMZALAMA' , xy: [250 , 100]},
                    {name: 'Join0' , type: 'ONAYLAMA' , xy: [100 , 300]},
                    {name: 'Task0' , type: 'CEVAPLAMA' , xy: [400 , 100]},
                    {name: 'Fork0' , type: 'YONLENDIRME' , xy: [400 , 300]},
                    {name: 'EndNode0' , type: 'end' , xy: [600 , 10]},
                    ];

     const connect = [ {connector: { name: 'Link0' }, source: 'Start0', target: 'Condition0' },
                    {connector: { name: 'Link1' }, source: 'Condition0', target: 'State0' },
                    {connector: { name: 'Link2' }, source: 'State0', target: 'Join0' },
                    {connector: { name: 'Link3' }, source: 'Join0', target: 'Task0' },
                    {connector: { name: 'Link4' }, source: 'Task0', target: 'Fork0' },
                    {connector: { name: 'Link5' }, source: 'Fork0', target: 'EndNode0' },
                    {connector: { name: 'Link6' }, source: 'State0', target: 'EndNode0' }
                    ];
     let jsonData = this.deneme( node , connect);
    // console.log('sonuc 0' + jsonData);
  }
  deneme(nodelar: any[] , connects: any[]) {
    let diagramBuilder;
    let jsonData;
    YUI({ filter: 'raw' }).use('aui-diagram-builder', function(Y) {
      let availableFields = [
          {
              type: 'CEVAPLAMA',
              label: 'Cevaplama',
              iconClass: 'diagram-node-task-icon'
          },
          {
              type: 'IMZALAMA',
              label: 'İmzalama',
              iconClass: 'diagram-node-state-icon'
          },
          {
              type: 'ONAYLAMA',
              label: 'Onaylama',
              iconClass: 'diagram-node-join-icon'
          },
          {
              type: 'YONLENDIRME',
              label: 'Yönlendirme',
              iconClass: 'diagram-node-fork-icon'
          },
      ];
      diagramBuilder = new Y.DiagramBuilder({
        availableFields: availableFields,
          boundingBox: '#diagramBuilder',
          fields: nodelar
      }).render();
     // console.log(nodelar);
      diagramBuilder.connectAll(connects);
     // jsonData = diagramBuilder.toJSON();
     // console.log(jsonData);
  });
   // return jsonData;
  }





}


