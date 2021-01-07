import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometchatMessageListComponent } from "./cometchat-message-list/cometchat-message-list.component";
import { CometchatSenderMessageBubbleModule } from "../cometchat-sender-message-bubble/cometchat-sender-message-bubble.module";
import { CometchatReceiverMessageBubbleModule } from "../cometchat-receiver-message-bubble/cometchat-receiver-message-bubble.module";
import { CometchatSenderFileBubbleModule } from "../cometchat-sender-file-bubble/cometchat-sender-file-bubble.module";
import { CometchatReceiverFileMessageBubbleModule } from "../cometchat-receiver-file-message-bubble/cometchat-receiver-file-message-bubble.module";
import { CometchatSenderImageBubbleModule } from "../cometchat-sender-image-bubble/cometchat-sender-image-bubble.module";
import { CometchatReceiverImageMessageBubbleModule } from "../cometchat-receiver-image-message-bubble/cometchat-receiver-image-message-bubble.module";
import { CometchatSenderVideoBubbleModule } from "../cometchat-sender-video-bubble/cometchat-sender-video-bubble.module";
import { CometchatReceiverVideoBubbleModule } from "../cometchat-receiver-video-bubble/cometchat-receiver-video-bubble.module";
import { CometchatSenderAudioMessageBubbleModule } from "../cometchat-sender-audio-message-bubble/cometchat-sender-audio-message-bubble.module";
import { CometchatReceiverAudioMessageBubbleModule } from "../cometchat-receiver-audio-message-bubble/cometchat-receiver-audio-message-bubble.module";
import { CometchatDeleteMessageBubbleModule } from "../cometchat-delete-message-bubble/cometchat-delete-message-bubble.module";
import { CometchatSenderPollMessageBubbleModule } from "../Extensions/cometchat-sender-poll-message-bubble/cometchat-sender-poll-message-bubble.module";
import { CometchatReceiverPollMessageBubbleModule } from "../Extensions/cometchat-receiver-poll-message-bubble/cometchat-receiver-poll-message-bubble.module";
import { CometchatSenderStickerMessageBubbleModule } from "../Extensions/cometchat-sender-sticker-message-bubble/cometchat-sender-sticker-message-bubble.module";
import { CometchatReceiverStickerMessageBubbleModule } from "../Extensions/cometchat-receiver-sticker-message-bubble/cometchat-receiver-sticker-message-bubble.module";
import { CometchatCallMessageModule } from "../cometchat-call-message/call-message.module";
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [CometchatMessageListComponent],
  imports: [
    CommonModule,
    CometchatSenderMessageBubbleModule,
    CometchatSenderFileBubbleModule,
    CometchatReceiverFileMessageBubbleModule,
    CometchatSenderImageBubbleModule,
    CometchatReceiverImageMessageBubbleModule,
    CometchatSenderVideoBubbleModule,
    CometchatReceiverVideoBubbleModule,
    CometchatSenderAudioMessageBubbleModule,
    CometchatReceiverAudioMessageBubbleModule,
    CometchatReceiverMessageBubbleModule,
    CometchatDeleteMessageBubbleModule,
    CometchatSenderPollMessageBubbleModule,
    CometchatReceiverPollMessageBubbleModule,
    CometchatSenderStickerMessageBubbleModule,
    CometchatReceiverStickerMessageBubbleModule,
    CometchatCallMessageModule,
  ],
  exports: [CometchatMessageListComponent],
  providers: [DatePipe],
})
export class CometchatMessageListModule {}
