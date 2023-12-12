// https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocallySignedCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of key usages allowed for the issued certificate. Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}
  */
  readonly allowedUses: string[];
  /**
  * Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}
  */
  readonly caCertPem: string;
  /**
  * Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}
  */
  readonly caPrivateKeyPem: string;
  /**
  * Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}
  */
  readonly certRequestPem: string;
  /**
  * The resource will consider the certificate to have expired the given number of hours before its actual expiry time. This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}
  */
  readonly earlyRenewalHours?: number;
  /**
  * Is the generated certificate representing a Certificate Authority (CA) (default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}
  */
  readonly isCaCertificate?: boolean | cdktf.IResolvable;
  /**
  * Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}
  */
  readonly setSubjectKeyId?: boolean | cdktf.IResolvable;
  /**
  * Number of hours, after initial issuing, that the certificate will remain valid for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}
  */
  readonly validityPeriodHours: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert tls_locally_signed_cert}
*/
export class LocallySignedCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tls_locally_signed_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocallySignedCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocallySignedCert to import
  * @param importFromId The id of the existing LocallySignedCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocallySignedCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tls_locally_signed_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/locally_signed_cert tls_locally_signed_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocallySignedCertConfig
  */
  public constructor(scope: Construct, id: string, config: LocallySignedCertConfig) {
    super(scope, id, {
      terraformResourceType: 'tls_locally_signed_cert',
      terraformGeneratorMetadata: {
        providerName: 'tls',
        providerVersion: '4.0.5',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedUses = config.allowedUses;
    this._caCertPem = config.caCertPem;
    this._caPrivateKeyPem = config.caPrivateKeyPem;
    this._certRequestPem = config.certRequestPem;
    this._earlyRenewalHours = config.earlyRenewalHours;
    this._isCaCertificate = config.isCaCertificate;
    this._setSubjectKeyId = config.setSubjectKeyId;
    this._validityPeriodHours = config.validityPeriodHours;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_uses - computed: false, optional: false, required: true
  private _allowedUses?: string[]; 
  public get allowedUses() {
    return this.getListAttribute('allowed_uses');
  }
  public set allowedUses(value: string[]) {
    this._allowedUses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUsesInput() {
    return this._allowedUses;
  }

  // ca_cert_pem - computed: false, optional: false, required: true
  private _caCertPem?: string; 
  public get caCertPem() {
    return this.getStringAttribute('ca_cert_pem');
  }
  public set caCertPem(value: string) {
    this._caCertPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPemInput() {
    return this._caCertPem;
  }

  // ca_key_algorithm - computed: true, optional: false, required: false
  public get caKeyAlgorithm() {
    return this.getStringAttribute('ca_key_algorithm');
  }

  // ca_private_key_pem - computed: false, optional: false, required: true
  private _caPrivateKeyPem?: string; 
  public get caPrivateKeyPem() {
    return this.getStringAttribute('ca_private_key_pem');
  }
  public set caPrivateKeyPem(value: string) {
    this._caPrivateKeyPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caPrivateKeyPemInput() {
    return this._caPrivateKeyPem;
  }

  // cert_pem - computed: true, optional: false, required: false
  public get certPem() {
    return this.getStringAttribute('cert_pem');
  }

  // cert_request_pem - computed: false, optional: false, required: true
  private _certRequestPem?: string; 
  public get certRequestPem() {
    return this.getStringAttribute('cert_request_pem');
  }
  public set certRequestPem(value: string) {
    this._certRequestPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certRequestPemInput() {
    return this._certRequestPem;
  }

  // early_renewal_hours - computed: true, optional: true, required: false
  private _earlyRenewalHours?: number; 
  public get earlyRenewalHours() {
    return this.getNumberAttribute('early_renewal_hours');
  }
  public set earlyRenewalHours(value: number) {
    this._earlyRenewalHours = value;
  }
  public resetEarlyRenewalHours() {
    this._earlyRenewalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyRenewalHoursInput() {
    return this._earlyRenewalHours;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_ca_certificate - computed: true, optional: true, required: false
  private _isCaCertificate?: boolean | cdktf.IResolvable; 
  public get isCaCertificate() {
    return this.getBooleanAttribute('is_ca_certificate');
  }
  public set isCaCertificate(value: boolean | cdktf.IResolvable) {
    this._isCaCertificate = value;
  }
  public resetIsCaCertificate() {
    this._isCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaCertificateInput() {
    return this._isCaCertificate;
  }

  // ready_for_renewal - computed: true, optional: false, required: false
  public get readyForRenewal() {
    return this.getBooleanAttribute('ready_for_renewal');
  }

  // set_subject_key_id - computed: true, optional: true, required: false
  private _setSubjectKeyId?: boolean | cdktf.IResolvable; 
  public get setSubjectKeyId() {
    return this.getBooleanAttribute('set_subject_key_id');
  }
  public set setSubjectKeyId(value: boolean | cdktf.IResolvable) {
    this._setSubjectKeyId = value;
  }
  public resetSetSubjectKeyId() {
    this._setSubjectKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSubjectKeyIdInput() {
    return this._setSubjectKeyId;
  }

  // validity_end_time - computed: true, optional: false, required: false
  public get validityEndTime() {
    return this.getStringAttribute('validity_end_time');
  }

  // validity_period_hours - computed: false, optional: false, required: true
  private _validityPeriodHours?: number; 
  public get validityPeriodHours() {
    return this.getNumberAttribute('validity_period_hours');
  }
  public set validityPeriodHours(value: number) {
    this._validityPeriodHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodHoursInput() {
    return this._validityPeriodHours;
  }

  // validity_start_time - computed: true, optional: false, required: false
  public get validityStartTime() {
    return this.getStringAttribute('validity_start_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_uses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedUses),
      ca_cert_pem: cdktf.stringToTerraform(this._caCertPem),
      ca_private_key_pem: cdktf.stringToTerraform(this._caPrivateKeyPem),
      cert_request_pem: cdktf.stringToTerraform(this._certRequestPem),
      early_renewal_hours: cdktf.numberToTerraform(this._earlyRenewalHours),
      is_ca_certificate: cdktf.booleanToTerraform(this._isCaCertificate),
      set_subject_key_id: cdktf.booleanToTerraform(this._setSubjectKeyId),
      validity_period_hours: cdktf.numberToTerraform(this._validityPeriodHours),
    };
  }
}
