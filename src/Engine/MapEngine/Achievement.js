/**
 * Engine/MapEngine/Achievement.js
 *
 * Manage Achievement packets and UI
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(function( require )
{
	'use strict';


	/**
	 * Load dependencies
	 */
	var Network   = require('Network/NetworkManager');
	var PACKET    = require('Network/PacketStructure');

    function onAllAchievementList(pkt){
		console.log('onAllAchievementList');
	}
	
    function onAchievementUpdate(pkt){
		console.log('onAchievementUpdate');
	}

    function onRequestAchievementRewardACK(pkt){
		console.log('onRequestAchievementRewardACK');
	}
	/**
	 * Initialize
	 */
	return function MainEngine()
	{
        Network.hookPacket( PACKET.ZC.ALL_ACH_LIST,           onAllAchievementList );
        Network.hookPacket( PACKET.ZC.ACH_UPDATE,             onAchievementUpdate );
		Network.hookPacket( PACKET.ZC.REQ_ACH_REWARD_ACK,     onRequestAchievementRewardACK );
    }
});
