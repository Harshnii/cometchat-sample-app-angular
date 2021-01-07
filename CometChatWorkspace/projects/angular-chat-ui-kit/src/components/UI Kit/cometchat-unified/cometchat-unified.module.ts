import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometchatUnifiedComponent } from "./cometchat-unified/cometchat-unified.component";
import { CometchatNavBarModule } from "../../cometchat-nav-bar/cometchat-nav-bar.module";
import { CometchatMessageListScreenModule } from "../../Messages/cometchat-message-list-screen/cometchat-message-list-screen.module";
import { CometchatUserDetailModule } from "../../Users/cometchat-user-detail/cometchat-user-detail.module";
import { CometchatMessageThreadModule } from "../../Messages/cometchat-message-thread/cometchat-message-thread.module";
import { CometchatImageViewModule } from "../../Messages/cometchat-image-view/cometchat-image-view.module";
import { CometchatGroupDetailsModule } from "../../Groups/cometchat-group-details/cometchat-group-details.module";
import { CometchatIncomingCallModule } from "../../Calls/cometchat-incoming-call/cometchat-incoming-call.module";
import { CometchatOutgoingCallModule } from "../../Calls/cometchat-outgoing-call/cometchat-outgoing-call.module";

@NgModule({
  declarations: [CometchatUnifiedComponent],
  imports: [
    CommonModule,
    CometchatNavBarModule,
    CometchatMessageListScreenModule,
    CometchatUserDetailModule,
    CometchatMessageThreadModule,
    CometchatImageViewModule,
    CometchatGroupDetailsModule,
    CometchatIncomingCallModule,
    CometchatOutgoingCallModule,
  ],
  exports: [CometchatUnifiedComponent],
})
export class CometchatUnifiedModule {}
