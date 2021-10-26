// https://www.terraform.io/docs/providers/tls/r/private_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the algorithm to use to generate the private key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/private_key.html#algorithm PrivateKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * ECDSA curve to use when generating a key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/private_key.html#ecdsa_curve PrivateKey#ecdsa_curve}
  */
  readonly ecdsaCurve?: string;
  /**
  * Number of bits to use when generating an RSA key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/private_key.html#rsa_bits PrivateKey#rsa_bits}
  */
  readonly rsaBits?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tls/r/private_key.html tls_private_key}
*/
export class PrivateKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tls_private_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tls/r/private_key.html tls_private_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateKeyConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tls_private_key',
      terraformGeneratorMetadata: {
        providerName: 'tls'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._algorithm = config.algorithm;
    this._ecdsaCurve = config.ecdsaCurve;
    this._rsaBits = config.rsaBits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm
  }

  // ecdsa_curve - computed: false, optional: true, required: false
  private _ecdsaCurve?: string | undefined; 
  public get ecdsaCurve() {
    return this.getStringAttribute('ecdsa_curve');
  }
  public set ecdsaCurve(value: string | undefined) {
    this._ecdsaCurve = value;
  }
  public resetEcdsaCurve() {
    this._ecdsaCurve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdsaCurveInput() {
    return this._ecdsaCurve
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key_pem - computed: true, optional: false, required: false
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }

  // public_key_fingerprint_md5 - computed: true, optional: false, required: false
  public get publicKeyFingerprintMd5() {
    return this.getStringAttribute('public_key_fingerprint_md5');
  }

  // public_key_openssh - computed: true, optional: false, required: false
  public get publicKeyOpenssh() {
    return this.getStringAttribute('public_key_openssh');
  }

  // public_key_pem - computed: true, optional: false, required: false
  public get publicKeyPem() {
    return this.getStringAttribute('public_key_pem');
  }

  // rsa_bits - computed: false, optional: true, required: false
  private _rsaBits?: number | undefined; 
  public get rsaBits() {
    return this.getNumberAttribute('rsa_bits');
  }
  public set rsaBits(value: number | undefined) {
    this._rsaBits = value;
  }
  public resetRsaBits() {
    this._rsaBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaBitsInput() {
    return this._rsaBits
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      ecdsa_curve: cdktf.stringToTerraform(this._ecdsaCurve),
      rsa_bits: cdktf.numberToTerraform(this._rsaBits),
    };
  }
}
