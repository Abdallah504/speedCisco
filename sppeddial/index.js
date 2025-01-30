const jsxapi = require('jsxapi');

// Replace with your device's details
const DEVICE_IP = '192.168.x.x';
const USERNAME = 'admin';
const PASSWORD = 'password';

// Connect to the device
// const xapi = jsxapi.connect(`ssh://${DEVICE_IP}`, {
//   username: USERNAME,
//   password: PASSWORD,
// });

xapi.on('error', (err) => {
  console.error('Connection error:', err);
});

xapi.on('ready', async () => {
  console.log('Connected to device!');

  // Remove existing UI extensions (if any)
  await xapi.command('UserInterface Extensions Panel Remove', {
    PanelId: 'button_panel',
  }).catch(() => {
    console.log('No existing panel to remove.');
  });

  // Create a panel for buttons
  await xapi.command('UserInterface Extensions Panel Save', {
    PanelId: 'button_panel',
    Name: 'Manual Dialer Grid',
    Type: 'Custom',
  });

  // Manually define buttons
  const buttons = [
    { id: 'btn_1', name: 'Dial 1001', number: '1001', position: 'top:10%;left:10%;' },
    { id: 'btn_2', name: 'Dial 1002', number: '1002', position: 'top:10%;left:30%;' },
    { id: 'btn_3', name: 'Dial 1003', number: '1003', position: 'top:10%;left:50%;' },
    { id: 'btn_4', name: 'Dial 1004', number: '1004', position: 'top:10%;left:70%;' },
    { id: 'btn_5', name: 'Dial 1005', number: '1005', position: 'top:10%;left:90%;' },
    { id: 'btn_6', name: 'Dial 1006', number: '1006', position: 'top:20%;left:10%;' },
    { id: 'btn_7', name: 'Dial 1007', number: '1007', position: 'top:20%;left:30%;' },
    { id: 'btn_8', name: 'Dial 1008', number: '1008', position: 'top:20%;left:50%;' },
    { id: 'btn_9', name: 'Dial 1009', number: '1009', position: 'top:20%;left:70%;' },
    { id: 'btn_10', name: 'Dial 1010', number: '1010', position: 'top:20%;left:90%;' },
    { id: 'btn_11', name: 'Dial 1011', number: '1011', position: 'top:30%;left:10%;' },
    { id: 'btn_12', name: 'Dial 1012', number: '1012', position: 'top:30%;left:30%;' },
    { id: 'btn_13', name: 'Dial 1013', number: '1013', position: 'top:30%;left:50%;' },
    { id: 'btn_14', name: 'Dial 1014', number: '1014', position: 'top:30%;left:70%;' },
    { id: 'btn_15', name: 'Dial 1015', number: '1015', position: 'top:30%;left:90%;' },
    { id: 'btn_16', name: 'Dial 1016', number: '1016', position: 'top:40%;left:10%;' },
    { id: 'btn_17', name: 'Dial 1017', number: '1017', position: 'top:40%;left:30%;' },
    { id: 'btn_18', name: 'Dial 1018', number: '1018', position: 'top:40%;left:50%;' },
    { id: 'btn_19', name: 'Dial 1019', number: '1019', position: 'top:40%;left:70%;' },
    { id: 'btn_20', name: 'Dial 1020', number: '1020', position: 'top:40%;left:90%;' },
    { id: 'btn_21', name: 'Dial 1021', number: '1021', position: 'top:50%;left:10%;' },
    { id: 'btn_22', name: 'Dial 1022', number: '1022', position: 'top:50%;left:30%;' },
    { id: 'btn_23', name: 'Dial 1023', number: '1023', position: 'top:50%;left:50%;' },
    { id: 'btn_24', name: 'Dial 1024', number: '1024', position: 'top:50%;left:70%;' },
    { id: 'btn_25', name: 'Dial 1025', number: '1025', position: 'top:50%;left:90%;' },
    { id: 'btn_26', name: 'Dial 1026', number: '1026', position: 'top:60%;left:10%;' },
    { id: 'btn_27', name: 'Dial 1027', number: '1027', position: 'top:60%;left:30%;' },
    { id: 'btn_28', name: 'Dial 1028', number: '1028', position: 'top:60%;left:50%;' },
    { id: 'btn_29', name: 'Dial 1029', number: '1029', position: 'top:60%;left:70%;' },
    { id: 'btn_30', name: 'Dial 1030', number: '1030', position: 'top:60%;left:90%;' },
    { id: 'btn_31', name: 'Dial 1031', number: '1031', position: 'top:70%;left:10%;' },
    { id: 'btn_32', name: 'Dial 1032', number: '1032', position: 'top:70%;left:30%;' },
    { id: 'btn_33', name: 'Dial 1033', number: '1033', position: 'top:70%;left:50%;' },
    { id: 'btn_34', name: 'Dial 1034', number: '1034', position: 'top:70%;left:70%;' },
    { id: 'btn_35', name: 'Dial 1035', number: '1035', position: 'top:70%;left:90%;' },
    { id: 'btn_36', name: 'Dial 1036', number: '1036', position: 'top:80%;left:10%;' },
    { id: 'btn_37', name: 'Dial 1037', number: '1037', position: 'top:80%;left:30%;' },
    { id: 'btn_38', name: 'Dial 1038', number: '1038', position: 'top:80%;left:50%;' },
    { id: 'btn_39', name: 'Dial 1039', number: '1039', position: 'top:80%;left:70%;' },
    { id: 'btn_40', name: 'Dial 1040', number: '1040', position: 'top:80%;left:90%;' },
    { id: 'btn_41', name: 'Dial 1041', number: '1041', position: 'top:90%;left:10%;' },
    { id: 'btn_42', name: 'Dial 1042', number: '1042', position: 'top:90%;left:30%;' },
    { id: 'btn_43', name: 'Dial 1043', number: '1043', position: 'top:90%;left:50%;' },
    { id: 'btn_44', name: 'Dial 1044', number: '1044', position: 'top:90%;left:70%;' },
    { id: 'btn_45', name: 'Dial 1045', number: '1045', position: 'top:90%;left:90%;' },
    { id: 'btn_46', name: 'Dial 1046', number: '1046', position: 'top:100%;left:10%;' },
    { id: 'btn_47', name: 'Dial 1047', number: '1047', position: 'top:100%;left:30%;' },
    { id: 'btn_48', name: 'Dial 1048', number: '1048', position: 'top:100%;left:50%;' },
    { id: 'btn_49', name: 'Dial 1049', number: '1049', position: 'top:100%;left:70%;' },
    { id: 'btn_50', name: 'Dial 1050', number: '1050', position: 'top:100%;left:90%;' },
  ];
  

  // Add each button to the panel
  for (const button of buttons) {
    await xapi.command('UserInterface Extensions Widget Add', {
      PanelId: 'button_panel',
      WidgetId: button.id,
      Name: button.name,
      Type: 'Button',
      Options: {
        Size: 'Small',
        Position: button.position,
      },
    });

    // Map button ID to dial number
    buttonDialMap[button.id] = button.number;
  }

  console.log('Buttons created!');

  // Event listener for button click
  xapi.event.on('UserInterface Extensions Widget Action', (event) => {
    const { WidgetId } = event;

    // Check if the clicked widget is in our button map
    if (buttonDialMap[WidgetId]) {
      const numberToDial = buttonDialMap[WidgetId];
      console.log(`Dialing: ${numberToDial}`);

      // Dial the number
      xapi.command('Dial', { Number: numberToDial }).catch((err) => {
        console.error(`Failed to dial ${numberToDial}:`, err);
      });
    }
  });
});

// Map to store button IDs and their corresponding dial numbers
const buttonDialMap = {};
