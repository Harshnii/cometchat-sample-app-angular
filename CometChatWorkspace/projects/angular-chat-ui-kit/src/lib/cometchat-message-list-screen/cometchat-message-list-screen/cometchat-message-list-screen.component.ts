import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "cometchat-message-list-screen",
  templateUrl: "./cometchat-message-list-screen.component.html",
  styleUrls: ["./cometchat-message-list-screen.component.css"],
})
export class CometchatMessageListScreenComponent implements OnInit {
  @ViewChild("scrollMe", null) chatWindow: ElementRef;

  @Input() item = null;
  @Input() type = null;

  @Output() actionGenerated: EventEmitter<any> = new EventEmitter();

  messageList = [];
  scrollToBottom: true;
  messageToBeEdited: null;
  replyPreview: null;
  liveReaction: false;
  changeNumber = 0;
  reachedTopOfConversation = false;
  scrollVariable = 0;

  constructor() {}

  ngOnInit() {
    //console.log("MessageListScreen -> Type of User ", this.type);
    //console.log("MessageListScreen -> ChatWindow ", this.chatWindow);
  }

  /**
   * Handles all the actions emitted by the child components that make the current component
   * @param Event action
   */
  actionHandler(action) {
    //handle Events/Actions generated from MessageHeader , MessageComposer and MessageList Here

    // action.payLoad has the array of messages that is received
    let messages = action.payLoad;

    console.log("MessageListScreen --> action generation is ", action);

    switch (action.type) {
      case "customMessageReceived":
      case "messageReceived": {
        const message = messages[0];
        if (message.parentMessageId) {
          // Implement while doing the threaded message feature
          // this.updateReplyCount(messages);
        } else {
          // Smart Reply Feature
          // this.smartReplyPreview(messages);
          // console.log(
          //   "received a message from the user , u r chatting with , going to append it"
          // );
          this.appendMessage(messages);
        }

        //play message received audio
        //this.playAudio();

        break;
      }

      case "messageFetched": {
        this.prependMessages(messages);
        break;
      }
      case "olderMessagesFetched": {
        this.reachedTopOfConversation = false;

        //No Need for below actions if there is nothing to prepend
        if (messages.length == 0) break;

        let prevScrollHeight = this.chatWindow.nativeElement.scrollHeight;

        this.prependMessages(messages);

        setTimeout(() => {
          this.scrollVariable =
            this.chatWindow.nativeElement.scrollHeight - prevScrollHeight;
        }, 1);

        break;
      }
      case "messageComposed": {
        this.appendMessage(messages);
        this.actionGenerated.emit({
          type: "messageComposed",
          payLoad: messages,
        });
        break;
      }
      case "messageUpdated": {
        this.updateMessages(messages);
        break;
      }
      case "viewActualImage": {
        this.actionGenerated.emit({
          type: "viewActualImage",
          payLoad: messages,
        });
        break;
      }
      case "newConversationOpened": {
        this.setMessages(messages);

        break;
      }
      case "viewMessageThread": {
        this.actionGenerated.emit({
          type: "viewMessageThread",
          payLoad: messages,
        });
        break;
      }
      case "deleteMessage": {
        //this.deleteMessage(messages);
        break;
      }
      case "editMessage": {
        //this.editMessage(messages);
        break;
      }
    }
  }
  /**
   * set Messages Directly , coz new conversation is opened , hence no need to prepend or append
   * @param Any messages
   */
  setMessages(messages) {
    this.messageList = [...messages];

    console.log("MessageListScreen->> ", this.messageList);

    this.scrollToBottomOfChatWindow();
  }

  /**
   * prepend Fetched Messages
   * @param Any messages
   */
  prependMessages(messages) {
    this.messageList = [...messages, ...this.messageList];
  }

  /**
   * append Messages that are sent
   * @param Any messages
   */
  appendMessage = (messages) => {
    let dummy = [...this.messageList];

    this.messageList = [...dummy, ...messages];

    this.scrollToBottomOfChatWindow();

    //console.log("appending the sent message ", this.messageList);
  };

  /**
   * update status of message ie. read or deliv
   * @param Any messages
   */
  updateMessages = (messages) => {
    // let dummy = [...this.messageList];

    this.messageList = [...messages];
    this.scrollToBottomOfChatWindow();
  };

  handleScroll(e) {
    // console.log(`Message List Screen --> user started scrollling `, e);

    // console.log(
    //   `Message List Screen --> e.currentTarget.scrollHeight `,
    //   e.currentTarget.scrollHeight
    // );
    // console.log(
    //   `Message List Screen --> e.currentTarget.scrollTop `,
    //   e.currentTarget.scrollTop
    // );
    // console.log(
    //   `Message List Screen --> e.currentTarget.clientHeight `,
    //   e.currentTarget.clientHeight
    // );

    const bottom =
      Math.round(e.currentTarget.scrollHeight - e.currentTarget.scrollTop) ===
      Math.round(e.currentTarget.clientHeight);

    //console.log("Message List Screen --> reached bottom ", bottom);

    const top = e.currentTarget.scrollTop === 0;

    if (top) {
      this.reachedTopOfConversation = top;
    }

    // console.log(
    //   "Message List Screen --> reached top of chat , fetch old conversation ",
    //   this.reachedTopOfConversation
    // );
  }

  scrollToBottomOfChatWindow() {
    // console.log(
    //   "Message List Screen --> Making The Chat Window Scroll to Bottom "
    // );

    setTimeout(() => {
      this.scrollVariable =
        this.chatWindow.nativeElement.scrollHeight -
        this.chatWindow.nativeElement.clientHeight;
    }, 1);
  }
}
