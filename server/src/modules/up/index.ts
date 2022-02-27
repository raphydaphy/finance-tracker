import {UpWebhookEvent} from "./types";

export function handleWebhookEvent(event: UpWebhookEvent) {
  console.info(`Received UP webhook event (${event?.data?.attributes?.eventType || '???'})`, event);
}