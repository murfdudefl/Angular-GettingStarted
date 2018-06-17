import { Component, OnChanges, Input, Output,EventEmitter } from "@angular/core";

@Component ({
selector: 'pm-star',
templateUrl: './star.component.html',
styleUrls: ['./star.component.css'],
})

export class StarComponent
implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    onClick() {
        console.log(`Product has a ${this.rating} rating`);
        this.ratingClicked.emit(`Product has a ${this.rating} rating`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
