exports.dareValidationButtons = (questioner) => {
  return {
    type: 'template',
    altText: 'Challange done?',
    template: {
      type: 'buttons',
      actions: [
        {
          type: 'postback',
          label: 'Yes',
          data: `action=darevalidation&questionerLineId=${questioner.lineId}`
        },
      ],
      title: `${questioner.fullName}`,
      text: "Has the target finished his / her challange?\n\nClick \"Done\" if the target has done the challange"
    }
  }
}